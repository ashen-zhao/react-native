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

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */

    override init(frame: CGRect) {
        super.init(frame: frame)
        let url = "http://localhost:8081/index.ios.bundle?platform=ios&dev=true"
        let jsCodeLoacation = URL(string: url)
        let rootview = RCTRootView.init(bundleURL: jsCodeLoacation, moduleName: "RN", initialProperties: nil, launchOptions: nil)
        self.addSubview(rootview!)
        rootview?.frame = self.bounds
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
