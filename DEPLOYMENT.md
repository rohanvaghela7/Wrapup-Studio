# Deploy Wrap UP on Render

This project is configured as a Render Node.js Web Service through `render.yaml`.
It does not require a database for the current WhatsApp enquiry flow.

## Before the first deploy

1. Push this project to a GitHub or GitLab repository.
2. In Render, choose **New → Blueprint** and connect that repository.
3. Render will detect `render.yaml` and create the `wrap-up-studio` web service.
4. If Render assigns a different hostname, update `NEXT_PUBLIC_SITE_URL` in the
   Render dashboard and redeploy.

## Production commands

- Build: `npm ci && npm run build`
- Start: `npm start -- -H 0.0.0.0 -p $PORT`
- Health check: `/api/health`

## Environment values

- `NEXT_PUBLIC_SITE_URL`: the full HTTPS website URL without a trailing slash.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: the WhatsApp number in international digits
  only, with no spaces or `+`.

The optimized videos in `public/` are the deployable copies. Original-quality
source videos are kept locally in `media-source/` and intentionally ignored by
Git.
