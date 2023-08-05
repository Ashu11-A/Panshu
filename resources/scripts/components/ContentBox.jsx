import React, { Component } from "react"

class ContentBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, children } = this.props
        return (
            <div>
                <div className="bg-white rounded-lg  p-8 ">
                    {title && <h2 className={"text-neutral-300 mb-4 px-4 text-2xl"}>{title}</h2>}
                    <div className="bg-black rounded-2xl bg-opacity-10 backdrop-blur-[10px] relative p-4 shadow-lg max-w-md text-center">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentBox
