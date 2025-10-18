import { Button } from "@heroui/react";

interface BottomProps {
    visible: boolean;
    smallButtonText: string;
    largeButtonText: string;
    onSmallButtonClick: () => void;
    onLargeButtonClick: () => void;
    smallButtonDisabled?: boolean;
    largeButtonDisabled?: boolean;
    smallButtonColor?: 'primary' | 'secondary' | 'danger' | 'default';
    largeButtonColor?: 'primary' | 'secondary' | 'danger' | 'default';
}

export const Bottom = ({
    visible,
    smallButtonText,
    largeButtonText,
    onLargeButtonClick,
    onSmallButtonClick,
    smallButtonDisabled = false,
    largeButtonDisabled = false,
    smallButtonColor = 'default',
    largeButtonColor = 'primary'
}: BottomProps) => {
    if (!visible) return null;

    return (
        <div className="w-full h-30 bottom-0 fixed z-10 flex justify-center items-center">
            <div className="w-full max-w-md px-3 flex gap-3">
                <Button
                    size="lg"
                    color={smallButtonColor}
                    disabled={smallButtonDisabled}
                    onClick={onSmallButtonClick}
                    className="flex-[2] rounded-4xl text-xs"
>
                    {smallButtonText}
                </Button>
                <Button
                    size="lg"
                    color={largeButtonColor}
                    disabled={largeButtonDisabled}
                    onClick={onLargeButtonClick}
                    className="flex-[3] rounded-4xl text-xs"
                >
                    {largeButtonText}
                </Button>
            </div>
        </div>
    );
}