App.view.define('VMain', {

	extend: 'Ext.Container',
	fullscreen: true,
	
	alias: "widget.VMain",
	
	requires: [

    ],
	
	config: {
	
		autoDestroy: true,
		layout: {
			type: 'fit'
		},		
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Ecureuil'
			},
			{
				xtype: 'tabpanel',
				layout: {
					animation: 'slide',
					type: 'card'
				},
				items: [
				{
					xtype: 'container',
					title: 'Tab 1',
					iconCls: 'info'
				},
				{
					xtype: 'container',
					title: 'Tab 2',
					iconCls: 'info'
				},
				{
					xtype: 'container',
					title: 'Tab 3',
					iconCls: 'info'
				}
				],
				tabBar: {
					docked: 'bottom',
					layout: {
						pack: 'center',
						type: 'hbox'
					}
				}
			}
		]			
	}
	
});