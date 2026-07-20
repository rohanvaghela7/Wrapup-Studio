from pathlib import Path
import sys

from PIL import Image, ImageSequence


def make_transparent(frame: Image.Image) -> Image.Image:
    image = frame.convert("RGBA")
    pixels = []
    for red, green, blue, alpha in image.getdata():
        # The supplied logo GIFs use white as their matte. Remove only near-white
        # pixels so the coloured mark and its antialiased edges stay intact.
        if red > 245 and green > 245 and blue > 245:
            pixels.append((red, green, blue, 0))
        else:
            pixels.append((red, green, blue, alpha))
    image.putdata(pixels)
    return image


def clean_gif(source: Path, destination: Path) -> None:
    with Image.open(source) as source_image:
        frames = [make_transparent(frame) for frame in ImageSequence.Iterator(source_image)]
        durations = [frame.info.get("duration", source_image.info.get("duration", 100)) for frame in ImageSequence.Iterator(source_image)]
        if not frames:
            raise ValueError(f"No frames found in {source}")
        frames[0].save(
            destination,
            save_all=True,
            append_images=frames[1:],
            loop=source_image.info.get("loop", 0),
            duration=durations,
            disposal=2,
            transparency=0,
            optimize=False,
        )


if __name__ == "__main__":
    clean_gif(Path(sys.argv[1]), Path(sys.argv[2]))
