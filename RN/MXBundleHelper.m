//
//  MXBundleHelper.m
//  Knowme
//
//  Created by shenzw on 8/4/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "MXBundleHelper.h"
#import "SSZipArchive.h"
@implementation MXBundleHelper
+(NSURL *)getBundlePath{  
//#ifdef  DEBUG
//  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
//  return jsCodeLocation;
//#else
  //需要存放和读取的document路径
  //jsbundle地址
  NSString *jsCachePath = [NSString stringWithFormat:@"%@/\%@",NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0],@"main.jsbundle"];
  //assets文件夹地址
  NSString *assetsCachePath = [NSString stringWithFormat:@"%@/\%@",NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0],@"assets"];
  
    NSString * jszipCachePath = [NSString stringWithFormat:@"%@",NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0]];
    
    BOOL jszipExist = [[NSFileManager defaultManager] fileExistsAtPath:jszipCachePath];
    
//    if(jszipExist) {
//        NSLog(@"jszip已存在%@", jszipCachePath);
//    } else {
        NSString *jszipBundlePath = [[NSBundle mainBundle] pathForResource:@"jsbundle" ofType:@"zip"];
        
//        [SSZipArchive unzipFileAtPath:jszipBundlePath toDestination:jszipCachePath];
        [SSZipArchive unzipFileAtPath:jszipBundlePath toDestination:jszipCachePath overwrite:YES password:nil error:nil];
        
//        let filepath = data as! String
//        //            let despath = NSSearchPathForDirectoriesInDomains(FileManager.SearchPathDirectory.documentDirectory, FileManager.SearchPathDomainMask.userDomainMask, true).first
//        //
//        //            try! SSZipArchive.unzipFile(atPath: filepath, toDestination: despath, overwrite: true, password: nil)
        
    
        
        
//        [[NSFileManager defaultManager] copyItemAtPath:jszipBundlePath toPath:jszipCachePath error:nil];
//        NSLog(@"jszip已拷贝至Document: %@",jsCachePath);
//    }
//
//  //判断JSBundle是否存在
//  BOOL jsExist = [[NSFileManager defaultManager] fileExistsAtPath:jsCachePath];
//  //如果已存在
//  if(jsExist){
//    NSLog(@"js已存在: %@",jsCachePath);
//    //如果不存在
//  }else{
//    NSString *jsBundlePath = [[NSBundle mainBundle] pathForResource:@"main" ofType:@"jsbundle"];
//    [[NSFileManager defaultManager] copyItemAtPath:jsBundlePath toPath:jsCachePath error:nil];
//    NSLog(@"js已拷贝至Document: %@",jsCachePath);
//  }
//  
//  //判断assets是否存在
//  BOOL assetsExist = [[NSFileManager defaultManager] fileExistsAtPath:assetsCachePath];
//  //如果已存在
//  if(assetsExist){
//    NSLog(@"assets已存在: %@",assetsCachePath);
//    //如果不存在
//  }else{
//    NSString *assetsBundlePath = [[NSBundle mainBundle] pathForResource:@"assets" ofType:nil];
//    [[NSFileManager defaultManager] copyItemAtPath:assetsBundlePath toPath:assetsCachePath error:nil];
//    NSLog(@"assets已拷贝至Document: %@",assetsCachePath);
//  }
  return [NSURL URLWithString:jsCachePath];
//#endif
}

@end
