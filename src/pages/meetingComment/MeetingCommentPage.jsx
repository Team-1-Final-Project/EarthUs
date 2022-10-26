import Footer from 'components/footer/Footer';
import MeetingCommentList from 'components/meeting/comment/MeetingCommentList';
import Navbar from 'components/navbar/Navbar';

const MeetingCommentPage = () => {
  return (
    <div>
      <Navbar />
      <MeetingCommentList />
      <Footer />
    </div>
  );
};

export default MeetingCommentPage;
