import { Heart, MousePointer, Terminal, LogIn, Activity, Database, Settings, Shield, Bell } from 'lucide-react';

export const Features = [
    {
        icon: Heart,
        heading: 'Event Logging',
        children: 'Log your favorite GitHub Events to a Discord Channel of your choice and never miss an update!',
        alt: 'evt-log',
        image: '/docs/logging.png',
    },
    {
        icon: MousePointer,
        heading: 'User Friendly',
        children: 'Simple and intuitive commands for easy usage.',
        alt: 'user-friendly',
        image: '/docs/commands.png',
    },
    {
        icon: LogIn,
        heading: 'Workflow Logging',
        children: 'Start receiving your Workflow Events, Action Events, Deploy Events, and more!',
        alt: 'workflow-logging',
        image: '/docs/workflows.png',
    },
    {
        icon: Activity,
        heading: 'Backup & Restore',
        children: 'Get peace of mind with our backup and restore commands to ensure your configurations are always saved.',
        alt: 'backup-restore',
        image: '/docs/backups.png',
    },
    {
        icon: Settings,
        heading: 'Channel Configuration',
        children: 'Set a specific channel where the logs should be sent, ensuring organized and easy-to-find logs.',
        alt: 'channel-configuration',
        image: '/docs/setrepo.png',
    },
    {
        icon: Shield,
        heading: 'Event Modifiers',
        children: 'Use event modifiers to blacklist or whitelist events, or redirect them to a separate channel from your main GitHub logs channel.',
        alt: 'event-modifiers',
        image: '/docs/modifiers.png',
    }
];