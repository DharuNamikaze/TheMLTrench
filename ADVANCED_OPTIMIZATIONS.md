# Advanced Optimizations for Scripting Bottleneck

## 🔴 Problem Identified

**Scripting Time: 1,802ms (29.3%)** - This is too high!

Target: <10% scripting time for 60 FPS

## 🎯 Advanced Optimizations Needed

### 1. Pre-filter Visible Meshes (Don't filter every frame)
**Current Issue**: `allMeshes.filter((m) => m.visible)` runs every frame
**Solution**: Maintain a cached list of visible meshes

### 2. Optimize Distance Calculations
**Current Issue**: `camera.position.distanceTo(chunk.center)` for every chunk
**Solution**: Use squared distance (avoids sqrt) and early exit

### 3. Reduce Raycasting Overhead
**Current Issue**: Even throttled, raycasting is expensive
**Solution**: Use spatial hashing to reduce raycast candidates

### 4. Avoid Object Allocations in Loop
**Current Issue**: Creating temporary objects in hot path
**Solution**: Reuse objects, avoid allocations

### 5. Batch Visibility Updates
**Current Issue**: Setting visibility one mesh at a time
**Solution**: Batch updates, use layers

## 📝 Implementation Plan

I'll create an optimized version that addresses all these issues.
