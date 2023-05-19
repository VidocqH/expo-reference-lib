import ExpoModulesCore

public class ExpoReferenceLibModule: Module {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        var referenceVC : UIReferenceLibraryViewController =  UIReferenceLibraryViewController(term: "")
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoReferenceLib')` in JavaScript.
        Name("ExpoReferenceLib")
        
        // Defines a JavaScript function that always returns a Promise and whose native code
        // is by default dispatched on the different thread than the JavaScript runtime runs on.
        AsyncFunction("presentReferenceLibraryAsync") { (value: String) in
            DispatchQueue.main.async {
                referenceVC = UIReferenceLibraryViewController(term: value)
                let rootVC = UIApplication.shared.keyWindow?.rootViewController
                rootVC?.present(referenceVC, animated: true)
            }
        }
        
        AsyncFunction("dismissReferenceLibraryAsync") {
            DispatchQueue.main.async {
                referenceVC.dismiss(animated: true)
            }
        }
        
        //      Function("dictionaryHasDefinition") { (value: String) in
        //          DispatchQueue.main.async {
        //              UIReferenceLibraryViewController.dictionaryHasDefinition(forTerm: value)
        //          }
        //      }
    }
}
