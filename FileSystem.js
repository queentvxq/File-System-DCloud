var FileSystem = {
	/*******
	 * *CONVERT relative URL to absolute URL
	 * ******/
	getFullUrl: function(url){
		return plus.io.convertLocalFileSystemURL(url);
	},
	getEntry: function(){
		plus.io.resolveLocalFileSystemURL(url,
			function(entry){
				return entry;
			},
			function(e){
				plus.nativeUI.alert( "无法解析此地址："+e.emssage );
			}
		);	
	},
	/*******
	 * *get 4 attributes of file:size,type,name,lastModifiedDate
	 * *********/
	getFileInfo: function(url){
		var _self = this,
		entry = _self.getEntry();
		entry.file( function ( file ) {
			return file;
		}, function ( e ) {
			plus.nativeUI.alert( "无法获取此文件信息："+e.emssage )
		} );
	},
	/******
	 * *flag: true(read as text) /false(read as data url)
	 * *****/
	readFile: function(url,flag){
		var _self = this,
		file = _self.getFileInfo(url);
		var Reader = new plus.io.FileReader();
		flag?Reader.readAsText(file):readAsDataURL(file);
		fileReader.onloadend = function(evt) {
					return evt.target.result;
				}
	},
	removeFile: function(url){
		var _self = this,
		entry = _self.getEntry(url);
		entry.remove( function ( entry ) {
			plus.console.log( url+"Remove succeeded" );
		}, function ( e ) {
			plus.nativeUI.alert( url+"删除失败"+e.message );
		} );
	}
};