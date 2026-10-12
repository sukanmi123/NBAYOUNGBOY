<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the artist storefront at the index route, with catalog data isolated in a browser-safe module; this preserves the requested first screen and consistent product details.
- Use imported asset pointers for reference-site media; this keeps original imagery available without third-party image hotlinks.
- Keep shopping interactions session-only until real commerce services are requested; this avoids presenting an unconnected store as a functioning payment service.
- Render shop navigation through a dedicated shared desktop/drawer component with browser-safe link data; this keeps destinations and expansion behavior consistent across screen sizes.
