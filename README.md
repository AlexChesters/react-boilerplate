# react-boilerplate

A reasonably bare boilerplate that gets you set up with
[React](https://facebook.github.io/react/).
The boilerplate includes:
* A skeleton React app
* Unit tests skeleton (using [Jest](https://facebook.github.io/jest/) and [Chai](http://chaijs.com/)).
* [Webpack](https://webpack.github.io/) for local running and bundling
* A [`stacks/`](./stacks) directory containing a CloudFormation stack to set up an S3 bucket and CloudFront distribution
* A [`ci/`](./ci) directory containing a CloudFormation stack to build and deploy the app
* A [`scripts/`] directory containing a shell script to deploy the above stack

# Usage instructions

1. `git clone git@github.com:AlexChesters/react-boilerplate.git my-new-app`
1. `cd my-new-app`
1. `./scripts/clean my-new-app`

After this you will be ready to go!
