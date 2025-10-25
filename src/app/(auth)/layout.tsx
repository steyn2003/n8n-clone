import Link from "next/link";
import Image from "next/image";

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Link href="/" className={'flex items-center justify-center gap-2 self-center font-medium mb-3'}>
                    <Image src={"/logo.svg"} alt={""} height={40} width={40}  />
                    Nodebase
                </Link>
                {children}
            </div>
        </div>
    )
}

export default layout;
