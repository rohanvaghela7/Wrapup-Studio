param(
  [Parameter(Mandatory = $true)]
  [string]$FfmpegPath
)

$ErrorActionPreference = 'Stop'

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$publicRoot = (Resolve-Path (Join-Path $projectRoot 'public')).Path
$sourceRoot = Join-Path $projectRoot 'media-source'

if (-not (Test-Path -LiteralPath $FfmpegPath)) {
  throw "FFmpeg was not found at $FfmpegPath"
}

New-Item -ItemType Directory -Path $sourceRoot -Force | Out-Null

$videos = Get-ChildItem -LiteralPath $publicRoot -File -Filter '*.mp4'

foreach ($video in $videos) {
  $targetPath = $video.FullName
  $sourcePath = Join-Path $sourceRoot $video.Name

  if (-not $targetPath.StartsWith($publicRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to modify a file outside the public directory: $targetPath"
  }

  if (-not $sourcePath.StartsWith($sourceRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to move a source file outside the media backup directory: $sourcePath"
  }

  if (-not (Test-Path -LiteralPath $sourcePath)) {
    Move-Item -LiteralPath $targetPath -Destination $sourcePath
  } else {
    Remove-Item -LiteralPath $targetPath -Force
  }

  Write-Host "Optimizing $($video.Name)"

  & $FfmpegPath `
    -hide_banner `
    -loglevel error `
    -stats `
    -y `
    -i $sourcePath `
    -map_metadata -1 `
    -an `
    -vf "fps=30,scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))'" `
    -c:v libx264 `
    -preset veryfast `
    -crf 24 `
    -pix_fmt yuv420p `
    -movflags +faststart `
    $targetPath

  if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $targetPath)) {
    Copy-Item -LiteralPath $sourcePath -Destination $targetPath -Force
    throw "Optimization failed for $($video.Name)"
  }
}

Get-ChildItem -LiteralPath $publicRoot -File -Filter '*.mp4' |
  Sort-Object Length -Descending |
  Select-Object Name, @{ Name = 'MiB'; Expression = { [math]::Round($_.Length / 1MB, 1) } }
