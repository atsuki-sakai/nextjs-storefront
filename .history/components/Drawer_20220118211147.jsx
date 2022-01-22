import TwitterDrawerTransition from "./TwitterDrawerTransition";
import { useRecoilState } from "recoil";
import isDrawerOpenState from './isDrawerOpenState';


const Drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState)
    return (
        <TwitterDrawerTransition
            isOpen={isDrawerOpen}
            setIsOpen={setIsDrawerOpen}
        >
            <div className="bg-white flex-1 max-w-xs min-w-0 border-r border-opacity-10">
                <div className="flex h-14 px-3 items-center border-b border-twitter-border-color">
                    <h2 className="text-lg font-bold flex-grow">
                        アカウント情報
                    </h2>
                </div>
            </div>
            // ..
        </TwitterDrawerTransition>
    )
}

export default Drawer