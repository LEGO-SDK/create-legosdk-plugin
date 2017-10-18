package com.opensource.legosdk.plugin.foo

import com.opensource.legosdk.core.*
import org.json.JSONObject

class LGOFOO: LGOModule() {

    override fun buildWithJSONObject(obj: JSONObject, context: LGORequestContext): LGORequestable? {
        val request = LGOFOORequest(context)
        //AssignRequestParams
        return LGOFOOOperation(request)
    }

}