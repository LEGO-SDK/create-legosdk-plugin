package com.opensource.pluginsample

import android.app.Application
import android.content.pm.PackageManager
import android.graphics.drawable.ColorDrawable
import com.opensource.legosdk.core.LGOCore
import com.opensource.legosdk.core.LGOWebViewActivity

/**
 * Created by cuiminghui on 2017/10/17.
 */
class Application: Application() {

    override fun onCreate() {
        super.onCreate()
        val applicationInfo = this.packageManager.getApplicationInfo(this.packageName, PackageManager.GET_META_DATA)
        val ks = applicationInfo.metaData.keySet()
        val ss = Class.forName("com.opensource.legosdk.plugin.foo.LGOFOO")
        LGOWebViewActivity.navigationBarDrawable = ColorDrawable(0xFF3F51B5.toInt())
    }

}