import { init } from 'ityped'


export default defineComponent({
    
    setup(){

        const text = ref<Element|null>(null)
        const source = ref<Element|null>(null)

        onMounted(() =>{
            text.value = document.getElementById('voice-text') 
            source.value = document.getElementById('voice-source')
            createItyped(['追逐梦想就是追逐自己的厄运，满地都是六便士，他却抬头看见了月亮。','——毛姆《月亮与六便士》'])
        })


        const createItyped = (data: string[]):void =>{
            init(text.value as Element, { showCursor: false, disableBackTyping:true, strings: [data[0]] }) 
            init(source.value as Element, { showCursor: false, disableBackTyping:true, strings: [data[1]]})
        }

        const hanldeToggle = () =>{
            text.value?text.value.innerHTML = '':null
            source.value?source.value.innerHTML = '':null
            createItyped(['The first wealth is health.','--Ralph Waldo Emerson'])
        }

        return () =>(
            <div class="default-layout-voice <md:hidden">
                <p class="default-layout-voice-text" id="voice-text"></p>
                <p class="default-layout-voice-source" id="voice-source"></p> 
                <span class="iconfont icon-neirongqiehuan default-layout-voice-toggle cursor-pointer" onClick={hanldeToggle}></span>
            </div>
        )
    }
})