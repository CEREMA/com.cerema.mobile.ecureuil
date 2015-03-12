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
		]
	}
	
});