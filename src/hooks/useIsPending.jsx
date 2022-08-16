import { useState } from "react";

export default function useIsPending(pendingType, boolean) {
    const [isPending, setIsPending] = useState({
        isPending: false,
        isError: false,
        isSuccess: false
    });

    setIsPending(prevState => {return{...prevState, [pendingType]: boolean}})

    return {isPending}
}
