package expo.modules.referencelib

import android.content.Intent
import android.content.Intent.*
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoReferenceLibModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoReferenceLib')` in JavaScript.
    Name("ExpoReferenceLib")

    AsyncFunction("presentReferenceLibraryAsync") { value: String ->
      openDefinition(value)
    }

    AsyncFunction("dismissReferenceLibraryAsync") {
      // IOS only
    }
  }
  private val context
    get() = requireNotNull(appContext.reactContext)
  private fun openDefinition(value: String) {
    val intent = Intent(ACTION_DEFINE)
    intent.putExtra(EXTRA_TEXT, value)
    intent.addFlags(FLAG_ACTIVITY_NEW_TASK)
    context.startActivity(intent)
  }
}
