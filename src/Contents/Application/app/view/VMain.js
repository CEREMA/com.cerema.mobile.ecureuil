App.view.define('VMain', {

	extend: 'Ext.navigation.View',
	fullscreen: true,
	
	alias: "widget.VMain",
	
	requires: [

    ],
	
	config: {
	
		autoDestroy: true,
		navigationBar: {
			items: [

			]				
		},	
		items: [
			{
				title: 'Ecureuil',
				layout: 'fit',
				items: [
					{
						html: 'Hello world'
					}
				]
			}
		
		]	
		
	}
	
});