//
//  RTModule.m
//  RN
//
//  Created by ashen on 17/3/8.
//  Copyright © 2017年 Ashen. All rights reserved.
//

#import "RTModule.h"
#import "RCTBridge.h"
#import "RCTBridgeModule.h"


@interface RTModule()<RCTBridgeModule>

@end

@implementation RTModule
    
    RCT_EXPORT_MODULE(RTModule)
    //RN跳转原生界面
    RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)msg){
        
        NSLog(@"RN传入原生界面的数据为:%@",msg);
        //主要这里必须使用主线程发送,不然有可能失效
        dispatch_async(dispatch_get_main_queue(), ^{
            [[NSNotificationCenter defaultCenter]postNotificationName:@"RntoOrigin" object:nil];
        });
    }
    
    @end
