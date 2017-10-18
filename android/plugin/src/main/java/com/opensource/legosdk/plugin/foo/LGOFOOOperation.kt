package com.opensource.legosdk.plugin.foo

import com.opensource.legosdk.core.LGORequestable
import com.opensource.legosdk.core.LGOResponse

/**
 * Created by cuiminghui on 2017/10/17.
 */
class LGOFOOOperation(val request: LGOFOORequest): LGORequestable() {

    override fun requestSynchronize(): LGOResponse {
        return LGOFOOResponse().accept(null)
    }

    override fun requestAsynchronize(callbackBlock: (LGOResponse) -> Unit) {
        callbackBlock.invoke(requestSynchronize())
    }

}