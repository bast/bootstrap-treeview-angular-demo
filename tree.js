var defaultData = [
    {
        text: 'Parent 1',
        state: {
            expanded: false,
        },
        nodes: [
            {
                text: 'Child 1',
                state: {
                    expanded: false,
                },
                nodes: [
                    {
                        text: 'Grandchild 1',
                        id: 'foo',
                        color: 'pink'
                    },
                    {
                        text: 'Grandchild 2',
                        id: 'foo'
                    }
                ]
            },
            {
                text: 'Child 2',
                state: {
                    expanded: false,
                },
                nodes: [
                    {
                        text: 'Grandchild 1',
                        id: 'bar'
                    },
                    {
                        text: 'Grandchild 2',
                        id: 'bar'
                    }
                ]
            }
        ]
    },
    {
        text: 'Parent 2',
        state: {
            expanded: false,
        },
        nodes: [
            {
                text: 'Child 1',
                state: {
                    expanded: false,
                },
                nodes: [
                    {
                        text: 'Grandchild 1',
                        id: 'foo',
                        color: 'blue'
                    },
                    {
                        text: 'Grandchild 2',
                        id: 'foo'
                    }
                ]
            },
            {
                text: 'Child 2',
                state: {
                    expanded: false,
                },
                nodes: [
                    {
                        text: 'Grandchild 1',
                        id: 'bar'
                    },
                    {
                        text: 'Grandchild 2',
                        id: 'bar'
                    }
                ]
            }
        ]
    }
];
