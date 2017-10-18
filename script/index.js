var fs = require('fs');
var path = require('path');
var plugin = require('../plugin.json');

// iOS
var headerContent = fs.readFileSync(path.resolve(__dirname, '../ios/Source/LGOFOOPlugin.h'), 'utf-8');
headerContent = headerContent.replace(/FOO/ig, plugin.name);
fs.writeFileSync(path.resolve(__dirname, '../ios/Source/LGO' + plugin.name + 'Plugin.h'), headerContent)
var implementContent = fs.readFileSync(path.resolve(__dirname, '../ios/Source/LGOFOOPlugin.m'), 'utf-8');
var requestProps = [];
var requestAssigns = [];
for (var key in plugin.request) {
    if (plugin.request[key] === "string") {
        requestProps.push('@property (nonatomic, strong) NSString *' + key + ';')
        requestAssigns.push('operation.request.' + key + ' = [dictionary[@"' + key + '"] isKindOfClass:[NSString class]] ? dictionary[@"' + key + '"] : nil;');
    }
    else if (plugin.request[key] === "int") {
        requestProps.push('@property (nonatomic, assign) NSInteger ' + key + ';')
        requestAssigns.push('operation.request.' + key + ' = [dictionary[@"' + key + '"] isKindOfClass:[NSNumber class]] ? [dictionary[@"' + key + '"] integerValue] : 0;');
    }
    else if (plugin.request[key] === "float") {
        requestProps.push('@property (nonatomic, assign) float ' + key + ';')
        requestAssigns.push('operation.request.' + key + ' = [dictionary[@"' + key + '"] isKindOfClass:[NSNumber class]] ? [dictionary[@"' + key + '"] floatValue] : 0;');
    }
    else if (plugin.request[key] === "boolean") {
        requestProps.push('@property (nonatomic, assign) BOOL ' + key + ';')
        requestAssigns.push('operation.request.' + key + ' = [dictionary[@"' + key + '"] isKindOfClass:[NSNumber class]] ? [dictionary[@"' + key + '"] boolValue] : NO;');
    }
}
implementContent = implementContent.replace('//RequestParams', requestProps.join('\n'));
implementContent = implementContent.replace('//AssignRequestParams', requestAssigns.join('\n    '));
var responseProps = [];
var responseAssign = [];
for (var key in plugin.response) {
    if (plugin.response[key] === "string") {
        responseProps.push('@property (nonatomic, strong) NSString *' + key + ';')
        responseAssign.push('@"' + key + '": self.' + key + ' ?: [NSNull null],')
    }
    else if (plugin.response[key] === "int") {
        responseProps.push('@property (nonatomic, assign) NSInteger ' + key + ';')
        responseAssign.push('@"' + key + '": @(self.' + key + '),')
    }
    else if (plugin.response[key] === "float") {
        responseProps.push('@property (nonatomic, assign) float ' + key + ';')
        responseAssign.push('@"' + key + '": @(self.' + key + '),')
    }
    else if (plugin.response[key] === "boolean") {
        responseProps.push('@property (nonatomic, assign) BOOL ' + key + ';')
        responseAssign.push('@"' + key + '": @(self.' + key + '),')
    }
}
implementContent = implementContent.replace('//ResponseParams', responseProps.join('\n'));
implementContent = implementContent.replace('//AssignResponseParams', responseAssign.join('\n           '));
implementContent = implementContent.replace('[[LGOCore modules] addModuleWithName:@"Plugin.FOO" instance:[self new]];', '[[LGOCore modules] addModuleWithName:@"' + plugin.api + '" instance:[self new]];')
implementContent = implementContent.replace(/FOO/ig, plugin.name);
fs.writeFileSync(path.resolve(__dirname, '../ios/Source/LGO' + plugin.name + 'Plugin.m'), implementContent)