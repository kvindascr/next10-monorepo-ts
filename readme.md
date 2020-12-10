# Next10 Typescript Monorepo

Next10 typecript monorepo with the following objectives:

- Separating apps from common libraries
- Sharing code among common libraries without the need to manually compile the libraries.
- Support and test for inner dependencies between shared libraries. 
- Ideally deployable within Vercel or Netlify (need to test this).
- Common dependencies shared among all projects defined at the top level.

Implementation with Yarn Workspaces.

This is a proof-of-concept as we currently use pnpm to handle a monorepo, but have problems when deploying on Vercel.

   
