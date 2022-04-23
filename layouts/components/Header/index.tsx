
import logo from '@/assets/image/logo.png'

export default defineComponent({

    setup(){

        return () =>(

            <div class="default-layout-header flex flex-none h-full container !max-w-screen-2xl mx-auto px-2 md:px-6">
                <div class="flex items-center flex-1 lg:flex-none">
                    <div class="inline-flex items-center text-xl lg:text-3xl font-damion">
                        <img class="inline-flex mr-1 lg:mr-3 h-8 lg:h-10" src={logo} alt="logo" />
                        xl686.com
                    </div>
                </div>
            </div>
        )
    }
})
