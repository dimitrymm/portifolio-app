import Articles from '@/components/Articles';
import Knowledge from '@/components/Knowledge';
import MainSection from '@/components/MainSection';

export default function Home() {
    return (
        <div className="container">
            <MainSection />
            <div className="space-y-16">
                <Knowledge />
                <Articles />
            </div>
        </div>
    );
}
