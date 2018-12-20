# Ralltiir Skeleton Loading
![Language](https://img.shields.io/badge/-TypeScript-blue.svg)
[![Build Status](https://travis-ci.org/Ralltiir/ralltiir-skeleton-loading.svg?branch=master)](https://travis-ci.org/Ralltiir/ralltiir-skeleton-loading)
[![Coveralls](https://img.shields.io/coveralls/Ralltiir/ralltiir-skeleton-loading.svg)](https://coveralls.io/github/Ralltiir/ralltiir-skeleton-loading)
[![npm package](https://img.shields.io/npm/v/ralltiir-skeleton-loading.svg)](https://www.npmjs.org/package/ralltiir-skeleton-loading)
[![npm downloads](http://img.shields.io/npm/dm/ralltiir-skeleton-loading.svg)](https://www.npmjs.org/package/ralltiir-skeleton-loading)

# What's ralltiir-skeleton-loading
ralltiir-skeleton-loading提供了ralltiir-skeleton所需的Loading类外观库，目前有Brand Logo及呼吸灯两种外观。

## Demo
[ralltiir-skeleton-loading](https://ralltiir.github.io/ralltiir-skeleton-loading/demo/)

## Module

[API](https://ralltiir.github.io/ralltiir-skeleton-loading/)

Example

```

var appearance = new BaiduLoading({Etpl: Etpl,toplight: true});

var skeleton = new Skeleton.Skeleton(container, appearance, {
  background: "#FFF"
  ,fadeOut: true
  ,fadeOutDuration: 400
  ,isOffset: true
  //,isFixed: true
});

skeleton.create();
skeleton.destroy();

```
