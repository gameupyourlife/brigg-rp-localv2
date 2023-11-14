import React from "react"
import ContentLoader from "react-content-loader"

const ChartLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={1152}
        height={400}
        viewBox="0 0 1152 400"
        backgroundColor="#262631"
        foregroundColor="#3a3a4a"
        {...props}
    >
        <rect x="0" y="0" rx="5" ry="5" width="1152" height="400" />
    </ContentLoader>
)

export default ChartLoader

