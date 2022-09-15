class Constant {
    constructor() {
        // 组件节点注册
        Graph.registerNode('Constant', {
            markup: [
                {
                    tagName: 'rect',
                    selector: 'titleRect',
                },
                {
                    tagName: 'text',
                    selector: 'titleText',
                },
                {
                    tagName: 'rect',
                    selector: 'body',
                },
                {
                    tagName: 'text',
                    selector: 'label',
                },
            ],

        })
    }
    createNode() {
        return graph.createNode({
            width: 120,
            height: 20,
            shape: 'Constant',
            data: {
                classify: "component",
                componentType: 'Constant',
                value: '',
                type: ''
            },
            attrs: {
                titleRect: {
                    width: 120,
                    height: 20,
                    fill: '#DB70DB',
                    stroke: '#000',
                    strokeWidth: 1,
                },
                titleText: {
                    text: 'Constant',
                    textAnchor: 'middle',
                    textVerticalAnchor: 'middle',
                    refX: '50%',
                    refY: '50%',

                },
                body: {
                    width: 120,
                    height: 20,
                    refY: '100%',
                    fill: '#fff',
                    stroke: '#000',
                    strokeWidth: 1,
                },
                label: {
                    text: 'Const',
                    textAnchor: 'start',
                    textVerticalAnchor: 'middle',
                    refY: '150%',
                    refX: '0%',
                }
            },
            //连接桩
            ports: {
                "groups": {
                    "in": {
                        "position": 'right',
                        "attrs": {
                            "circle": {
                                refY: '20',
                                "r": 6,
                                "magnet": true,
                                "stroke": '#31d0c6',
                                "strokeWidth": 2,
                                "fill": '#fff',
                            },
                        },
                    },

                },
                "items": [
                    {
                        // "id": 'port1',
                        "group": "in"
                    },
                ],
            },

        })
    }
    editNode(){
        let componentNode = getComponentById(currentNode.id)
        let field = prompt("请输入值和类型", 'testValue,NUMBER');
        if (field) {
            let fieldArray = field.split(",")
            let value = fieldArray[0]
            let type = fieldArray[1]
            // 逻辑json修改
            componentNode.data.value = value
            componentNode.data.type = type
            // uijson修改
            uiJsonData.cells.forEach(item => {
                if (item.id == currentNode.id) {
                    item.attrs.label.text = 'Const ' + value + " [" + type + "]"
                    item.attrs.body.width = item.attrs.label.text.length * 10
                    item.attrs.titleRect.width = item.attrs.label.text.length * 10
                    item.size.width = item.attrs.label.text.length * 10
                    console.log(item.attrs.label.text.length * 12)
                    // console.log(item.attrs.label.text.fontsize())
                }
            })
            graph.fromJSON(uiJsonData)
        }
    }
   
}