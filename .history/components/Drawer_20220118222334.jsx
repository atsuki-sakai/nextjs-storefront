import DrawerTransition from "./DrawerTransition";
import { useRecoilState } from "recoil";
import isDrawerOpenState from './isDrawerOpenState';


const Drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState)

    return (
        <DrawerTransition DrawerTransition
            isOpen={isDrawerOpen}
            setIsOpen={setIsDrawerOpen}
        >
            <div className="tw-bg-white tw-flex-1 tw-max-w-xs tw-min-w-0 tw-border-r tw-border-opacity-10">
                <div className="tw-flex tw-h-14 tw-px-3 tw-items-center tw-border-b tw-border-twitter-border-color">
                    <h2 className="tw-text-lg tw-font-bold tw-flex-grow">
                        アカウント情報
                    </h2>
                </div>
            </div>
        </DrawerTransition >
    )
}

export default Drawer