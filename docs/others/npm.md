# npm link
1. create a `symlink` - symbolic link with npm link in the dependency directory
2. `npm link SYMLINK`
3. npm unlink = npm uninstall
    - npm uninstall --no-save some-dep && npm install 
    

## npm watch
# NODE_ENV
The value of `NODE_ENV` is set automatically to `development` (when using `npm start`), `test` (when using `npm test`) or `production` (when using `npm build`).  
Thus, from the point of view of create-react-app, there are only three environments.


