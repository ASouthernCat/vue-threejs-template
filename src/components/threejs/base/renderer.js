import { WebGLRenderer, PCFSoftShadowMap,SRGBColorSpace } from 'three';
import { sizes } from '../system/sizes';
function createRenderer(canvas) {
    const renderer = new WebGLRenderer({
        canvas,
        antialias: true, //抗锯齿
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = SRGBColorSpace
    return renderer
}

export { createRenderer }