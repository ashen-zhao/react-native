//
//  WebController.swift
//  RN
//
//  Created by ashen on 17/2/7.
//  Copyright © 2017年 Ashen. All rights reserved.
//

import UIKit

class WebController: UIViewController {
    
    @IBOutlet weak var webview: UIWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        let req = URLRequest(url: URL(string: "http://test.uubee.com:9000/consumer/h5AgingPay_test_pro.jsp")!)
        webview.loadRequest(req)
        
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
