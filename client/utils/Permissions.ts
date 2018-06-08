interface Array<T> {
  hasPermission(module: string, permission: string): boolean;
}

const PERMISSION_WHITE_LIST: any = ['read', 'write', 'delete', 'edit'];

Array.prototype.hasPermission = function(module, permission) {
  if (!PERMISSION_WHITE_LIST.includes(permission))
    throw new Error(`Invalid ${permission} permission!`);
  return !!this.find(m => m.module === module && m[permission]);
};
