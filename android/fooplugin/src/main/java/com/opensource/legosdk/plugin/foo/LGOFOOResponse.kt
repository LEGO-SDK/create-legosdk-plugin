package com.opensource.legosdk.plugin.foo

import com.opensource.legosdk.core.LGOResponse

class LGOFOOResponse: LGOResponse() {

    override fun resData(): HashMap<String, Any> {
        return hashMapOf(
                Pair("text", "Hello, World!")
        )
    }

}