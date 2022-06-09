const message = [
    {
        id: 0,
        author: 'Luigi Toscano',
        action: 'Added to reviewer: ',
        reviewer: {
            name: 'Alfredo Garia',
            website: 'https://review.opendev.org/q/owner:alfrgarc%2540redhat.com'
        },
        date: 'Nov 30, 2020 18:24 ',
        canHidden: true
    },
    {
        id: 1,
        author: 'Luigi Toscano',
        action: 'Uploaded patch set 1.',
        date: 'Patchset 1|Nov 30, 2020 18:24 ',
        canHidden: false
    },
    {
        id: 2,
        author: 'Zuul',
        action: 'Added to reviewer: ',
        reviewer: {
            name: 'Zuul',
            website: 'https://review.opendev.org/q/owner:zuul'
        },
        date: 'Patchset 1|Nov 30, 2020 21:55 ',
        canHidden: false
    },
    {
        id: 3,
        author: 'Zuul',
        label: 'Verified +1',
        action: [
            'Build succeeded (check pipeline).',
            'openstack-tox-molecule https://zuul.opendev.org/t/openstack/build/b218ec9b40b442a5874fc571e5d3b5e5 : SUCCESS in 3m 29s',
            'openstack-tox-linters https://zuul.opendev.org/t/openstack/build/1533443fa79543c7bd8480f9952b09aa : SUCCESS in 6m 47s',
            'tripleo-tox-molecule https://zuul.opendev.org/t/openstack/build/89dd9757afac45de86ac26bb64bff03b : SUCCESS in 4m 47s',
            'tripleo-upgrade-centos-8-molecule https://zuul.opendev.org/t/openstack/build/2da7b8f6b542438b8209c903c3f3cfdb : SUCCESS in 10m 29s'
        ],
        date: 'Patchset 1|Nov 30, 2020 21:55 ',
        canHidden: false
    },
    {
        id: 4,
        author: 'Sergii Golovatiuk',
        action: 'Added to reviewer: ',
        reviewer: {
            name: 'Sergii Golovatiuk',
            website: 'https://review.opendev.org/q/owner:sgolovat%2540redhat.com'
        },
        date: 'Patchset 1|Dec 01, 2020 07:15 ',
        canHidden: false
    },
    {
        id: 5,
        author: 'Sergii Golovatiuk',
        label: ['Code-Review +2', 'Workflow +1'],
        date: 'Patchset 1|Dec 01, 2020 07:16 ',
        canHidden: false
    },
    {
        id: 6,
        author: 'Zuul',
        label: 'Verified removed',
        action: 'Starting gate jobs.',
        date: 'Patchset 1|Dec 01, 2020 07:16 ',
        canHidden: false
    },
    {
        id: 7,
        author: 'Zuul',
        label: 'Verified +2',
        action: [
            'Build succeeded (gate pipeline).',
            'openstack-tox-molecule https://zuul.opendev.org/t/openstack/build/8e208da4606f4382a0b10165225414eb : SUCCESS in 4m 28s',
            'openstack-tox-linters https://zuul.opendev.org/t/openstack/build/4148cfdb66cc47b994e798d1d0c942a2 : SUCCESS in 5m 57s',
            'tripleo-upgrade-centos-8-molecule https://zuul.opendev.org/t/openstack/build/a44049cd8dbf46bc9197a3e66f429fe6 : SUCCESS in 10m 20s'
        ],
        date: 'Patchset 1|Dec 01, 2020 07:40 ',
        canHidden: false
    },
    {
        id: 8,
        author: 'Zuul',
        action: 'Change has been successfully merged by Zuul',
        date: 'Patchset 1|Dec 01, 2020 07:40 ',
        canHidden: false
    }
]
export default message