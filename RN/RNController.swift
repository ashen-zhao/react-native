//
//  RNController.swift
//  RN
//
//  Created by ashen on 17/2/7.
//  Copyright © 2017年 Ashen. All rights reserved.
//

import UIKit
class RNController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "RN"
        let rnview = RNView(frame: CGRect(x: 0, y: 64, width: 300, height: 400))
        self.view.addSubview(rnview)
        NotificationCenter.default.addObserver(self, selector: #selector(push), name: NSNotification.Name.init(rawValue: "RntoOrigin"), object: nil)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func push() {
        let origin = OriginController()
        self.navigationController?.pushViewController(origin, animated: true)
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
