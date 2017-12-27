//
//  RNView.swift
//  RN
//
//  Created by ashen on 17/2/7.
//  Copyright © 2017年 Ashen. All rights reserved.
//

import UIKit
import React

class RNView: UIView {

    init(frame:CGRect,properties:[String:String]) {
        super.init(frame: frame)
        let url = "http://localhost:8081/index.ios.bundle?platform=ios&dev=true"
        let jsCodeLoacation = URL(string: url)
        
        
//        let jsCodeLoacation = MXBundleHelper.getBundlePath()//Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        let rootview = RCTRootView.init(bundleURL: jsCodeLoacation, moduleName: "RN", initialProperties: properties, launchOptions: nil)
        self.addSubview(rootview!)
        rootview?.frame = self.bounds
    }
        
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
