import ExpoModulesCore

public class ExpoReferenceLibModule: Module {
    var referenceVC: UIReferenceLibraryViewController?
    var isRunningOnMac: Bool {
        #if targetEnvironment(macCatalyst)
        return true
        #else
        if #available(iOS 14.0, *), ProcessInfo.processInfo.isiOSAppOnMac {
            return true
        } else {
            return false
        }
        #endif
    }
    
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoReferenceLib')` in JavaScript.
        Name("ExpoReferenceLib")
        
        // Defines a JavaScript function that always returns a Promise and whose native code
        // is by default dispatched on the different thread than the JavaScript runtime runs on.
        AsyncFunction("presentReferenceLibraryAsync") { (value: String) in
            DispatchQueue.main.async {
                if self.isRunningOnMac { return }
                self.referenceVC = UIReferenceLibraryViewController(term: value)
                if let referenceVC = self.referenceVC {
                    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
                       let rootVC = windowScene.windows.first(where: { $0.isKeyWindow })?.rootViewController {
                        rootVC.present(referenceVC, animated: true)
                    }
                }
            }
        }
        
        AsyncFunction("dismissReferenceLibraryAsync") {
            if self.isRunningOnMac { return }
            DispatchQueue.main.async {
                self.referenceVC?.dismiss(animated: true)
            }
        }
        
        //      Function("dictionaryHasDefinition") { (value: String) in
        //          DispatchQueue.main.async {
        //              UIReferenceLibraryViewController.dictionaryHasDefinition(forTerm: value)
        //          }
        //      }
    }
}
