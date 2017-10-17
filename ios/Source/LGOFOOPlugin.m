//
//  LGOFOOPlugin.m
//  plugin
//
//  Created by 崔明辉 on 2017/10/17.
//  Copyright © 2017年 UED Center, YY Inc. All rights reserved.
//

#import "LGOFOOPlugin.h"
#import <LEGO-SDK/LGOCore.h>

@interface LGOFOORequest: LGORequest

@end

@implementation LGOFOORequest

@end

@interface LGOFOOResponse: LGOResponse

@end

@implementation LGOFOOResponse

- (NSDictionary *)resData {
    return @{
             @"text": @"Hello, World!",
             };
}

@end

@interface LGOFOOperation: LGORequestable

@property (nonatomic, strong) LGOFOORequest *request;

@end

@implementation LGOFOOperation

- (LGOResponse *)requestSynchronize {
    return [[LGOFOOResponse new] accept:nil];
}

@end

@implementation LGOFOOPlugin

- (LGORequestable *)buildWithDictionary:(NSDictionary *)dictionary context:(LGORequestContext *)context {
    LGOFOOperation *operation = [LGOFOOperation new];
    operation.request = [LGOFOORequest new];
    return operation;
}

+ (void)load {
    [[LGOCore modules] addModuleWithName:@"Plugin.FOO" instance:[self new]];
}

@end
