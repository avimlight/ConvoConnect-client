import React, { Suspense } from 'react';
// No need to import dynamic from "next/dynamic" because you are not in a Next.js environment

const DynamicVideoUI = React.lazy(() => import("./video-ui-kit"));

export default function VideoCall() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DynamicVideoUI />
        </Suspense>
    );
}
