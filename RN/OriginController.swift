//
//  OriginController.swift
//  RN
//
//  Created by ashen on 17/3/8.
//  Copyright © 2017年 Ashen. All rights reserved.
//

import UIKit

class OriginController: UIViewController {

    public var url = "hello" //默认进入hello页面
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = UIColor.white
        self.navigationItem.title = "Origin"
        let rnview = RNView.init(frame:CGRect(x: 0, y: 64, width: self.view.frame.size.width, height: self.view.frame.size.height), properties: ["urlRouter":url])
        self.view.addSubview(rnview)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
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
