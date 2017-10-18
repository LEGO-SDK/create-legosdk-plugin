//
//  LGOFOOPlugin.m
//  plugin

#import "LGOFOOPlugin.h"
#import <LEGO-SDK/LGOCore.h>

@interface LGOFOORequest: LGORequest

//RequestParams

@end

@implementation LGOFOORequest

@end

@interface LGOFOOResponse: LGOResponse

//ResponseParams

@end

@implementation LGOFOOResponse

- (NSDictionary *)resData {
    return @{
             //AssignResponseParams
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

- (void)requestAsynchronize:(LGORequestableAsynchronizeBlock)callbackBlock {
    callbackBlock([self requestSynchronize]);
}

@end

@implementation LGOFOOPlugin

- (LGORequestable *)buildWithDictionary:(NSDictionary *)dictionary context:(LGORequestContext *)context {
    LGOFOOperation *operation = [LGOFOOperation new];
    operation.request = [LGOFOORequest new];
    //AssignRequestParams
    return operation;
}

+ (void)load {
    [[LGOCore modules] addModuleWithName:@"Plugin.FOO" instance:[self new]];
}

@end
