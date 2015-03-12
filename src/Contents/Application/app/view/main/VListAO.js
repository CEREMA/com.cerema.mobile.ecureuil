App.view.define('main.VListAO', {

	extend: 'Ext.Container',
	alias: "widget.TListAO",
	
	config: {
		title: "Appel d'offres",
		items: [
			{
				xtype: "list",
				store: App.store.create({
					fields: [
						"firstName",
						"lastName"
					],
					data: [
						{
							firstName: "Stephane",
							lastName: "Zucatti"
						}
					]
				}),
				itemTpl: '<div class="contact">{firstName} {lastName}</div>',
				grouped: true,
				onItemDisclosure: function(record, btn, index) {
					/*ListDemo.detailPanel.update(record.data);
					ListDemo.Viewport.setActiveItem('detailpanel');*/
				}				
			}
		]
	}
});