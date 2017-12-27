//
//  RTModule.m
//  RN
//
//  Created by ashen on 17/3/8.
//  Copyright © 2017年 Ashen. All rights reserved.
//

#import "RTModule.h"
#import <React/RCTConvert.h>
#import "RCTBridgeModule.h"


@interface RTModule()<RCTBridgeModule>

@end

@implementation RTModule

RCT_EXPORT_MODULE(RTModule)
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)msg){
    dispatch_async(dispatch_get_main_queue(), ^{
        [[NSNotificationCenter defaultCenter]postNotificationName:@"RntoOrigin" object:msg];
    });
}

@end
