
export default defineComponent({

    setup(){
        onMounted(() =>{
            L2Dwidget.init({ "model": { jsonPath:
                　　"http://hades0512.oss-cn-beijing.aliyuncs.com/live2d/koharu/assets/koharu.model.json",
                　　"scale": 1 }, "display": { "position": "left", "width": 100, "height": 300,
                　　"hOffset": -30, "vOffset": -160 }, "mobile": { "show": true, "scale": 0.5 },
                　　"react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 } 
            })
        })
        return () => null
    }
})