# webpack / rollup
#### Babel
Bundler-based build tool - crawl process and concatenate entire JS file

Source code ,distribution(list) code


Vite
Es modules in browser - transform and serve a piece of application	code using ES Modules when the browser request for it
(Deploy)

Production - performance optimization - tree-shaking, lazy-loading, common chance splitting

More bundles means better caching, but less compression


#### Entry
#### Output
#### Loaders - 
process other types of files and convert then into valid modules that can be consumed by application and added to dependency graph
#### Test:which file should be transformed
 #### Use
 which loaders should be used to do the transforming
module.rules
#### Cache - 
Cache the generated web pack modules and chunks to improve build speed - filesystem for more options


Plugins

Mode
 Browser compatibility



///A small sample of how a bundler works!
#### Transpile 
take source code written in one language and transforming into another language that has a similar level of abstraction

Web pack, browserify,parcel

#### Entry file - bootstrap our entire application
#### Bootstrapping
bootstrap - 序列,starting code, instructions for how the program should start
Code splitting on demand loading
-try understand which file it depends on - iterate - figures out every module - dependency graph

Circular dependencies, caching module exports, parsing each module just once

#### Javascript parser
Parser - resolve something into components - complier in a tree like structure(parse tree, Abstract syntax tree - AST Tree)

commonJS module system: require, module, export

```javascript
createAsset(fileName){
Return {
Id,filename,dependencies(get when traverse ast), code(transformAst)
} 
}

createGraph(entry){
mainAsset = createAsset(entry);
->queue[] ->createAsset->{id, dependencies, code, filename)
Execute until queue is empty

—>{
Mapping,->relativePath : child.id
Dependencies ->
```

1.add entry point
2.module graph
3.babel, transpile 
Chunk graph
Chunk main
Chunk async

Optimization.availableModules
Child : normal import, same chunks, all importer must be included, try all dependencies optionally 

# rspack
/'ɑrespæk/
- [rust](/others.md#Rust) - fast
- Highly parallelized architecture
- Built-in implementations of essential bundling features
- Optimized Hot Module Replacement(HMR)

Tubopack / Vite - HMR support / Webpack / Rollup

# Turborepo
