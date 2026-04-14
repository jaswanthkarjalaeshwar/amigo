import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Filter, Plus, Coffee, Music, Code, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';

const Events: React.FC = () => {
  const { joinEvent } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDate, setSelectedDate] = useState<string>('All');

  const categories = ['All', 'Tech', 'Music', 'Food', 'Sports', 'Study', 'Social', 'Adventure'];
  const dateFilters = ['All', 'Today', 'Tomorrow', 'This Week', 'This Weekend'];

  const events = [
    {
      id: '1',
      title: 'Chai & Code - Weekend Hackathon',
      description: 'Build something awesome while sipping chai! 48-hour hackathon with prizes worth ₹50k',
      category: 'Tech',
      date: '2024-01-20',
      time: '09:00 AM',
      location: 'Koramangala Social',
      attendees: 45,
      maxAttendees: 100,
      price: 'Free',
      organizer: 'Tech Bangalore',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Hackathon', 'Coding', 'Networking'],
      rating: 4.8
    },
    {
      id: '2',
      title: 'Bangalore Food Walk - Street Food Edition',
      description: 'Explore the best street food from VV Puram to Shivajinagar with fellow foodies!',
      category: 'Food',
      date: '2024-01-21',
      time: '06:00 PM',
      location: 'VV Puram Food Street',
      attendees: 23,
      maxAttendees: 30,
      price: '₹299',
      organizer: 'Bangalore Foodies',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Food', 'Walking', 'Culture'],
      rating: 4.9
    },
    {
      id: '3',
      title: 'Cubbon Park Morning Yoga & Meditation',
      description: 'Start your Sunday with peaceful yoga session in the heart of Bangalore',
      category: 'Sports',
      date: '2024-01-22',
      time: '07:00 AM',
      location: 'Cubbon Park',
      attendees: 18,
      maxAttendees: 25,
      price: 'Free',
      organizer: 'Mindful Bangalore',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Yoga', 'Meditation', 'Wellness'],
      rating: 4.7
    },
    {
      id: '4',
      title: 'Open Mic Night at Toit',
      description: 'Showcase your talent or just enjoy great performances with craft beer!',
      category: 'Music',
      date: '2024-01-23',
      time: '08:00 PM',
      location: 'Toit Brewpub, Indiranagar',
      attendees: 67,
      maxAttendees: 80,
      price: '₹199',
      organizer: 'Bangalore Artists',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Music', 'Performance', 'Networking'],
      rating: 4.6
    },
    {
      id: '5',
      title: 'Study Group - CAT Preparation',
      description: 'Intensive CAT prep session with mock tests and doubt clearing',
      category: 'Study',
      date: '2024-01-24',
      time: '02:00 PM',
      location: 'Central Library, Malleshwaram',
      attendees: 12,
      maxAttendees: 20,
      price: '₹150',
      organizer: 'CAT Crackers',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Study', 'CAT', 'Preparation'],
      rating: 4.5
    },
    {
      id: '6',
      title: 'Nandi Hills Sunrise Trek',
      description: 'Early morning trek to catch the beautiful sunrise - perfect weekend adventure!',
      category: 'Adventure',
      date: '2024-01-25',
      time: '04:30 AM',
      location: 'Nandi Hills',
      attendees: 34,
      maxAttendees: 40,
      price: '₹399',
      organizer: 'Bangalore Trekkers',
      image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Trekking', 'Sunrise', 'Adventure'],
      rating: 4.9
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesDate = selectedDate === 'All' || 
      (selectedDate === 'Today' && event.date === '2024-01-20') ||
      (selectedDate === 'Tomorrow' && event.date === '2024-01-21') ||
      (selectedDate === 'This Week' && new Date(event.date) <= new Date('2024-01-26')) ||
      (selectedDate === 'This Weekend' && ['2024-01-22', '2024-01-23'].includes(event.date));
    
    return matchesCategory && matchesDate;
  });

  const handleJoinEvent = (eventId: string) => {
    joinEvent(eventId);
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Tech': Code,
      'Music': Music,
      'Food': Coffee,
      'Sports': Users,
      'Study': Users,
      'Social': Users,
      'Adventure': Users
    };
    return icons[category as keyof typeof icons] || Users;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">
              Events in Namma Bengaluru 🎉
            </h1>
            <p className="text-gray-600">Discover amazing events happening around the city, machaa!</p>
          </div>
          <Link
            to="/events/create"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 mt-4 md:mt-0"
          >
            <Plus size={20} />
            <span>Create Event</span>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">When</label>
              <div className="flex flex-wrap gap-2">
                {dateFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setSelectedDate(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedDate === filter
                        ? 'bg-secondary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => {
            const IconComponent = getCategoryIcon(event.category);
            return (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                {/* Event Image */}
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.price === 'Free' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'
                    }`}>
                      {event.price}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white rounded-full px-2 py-1">
                    <Star size={12} className="text-warning-500" fill="currentColor" />
                    <span className="text-xs font-medium">{event.rating}</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <IconComponent size={16} className="text-primary-500" />
                    <span className="text-sm font-medium text-primary-600">{event.category}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{formatDate(event.date)} at {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin size={14} />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users size={14} />
                      <span>{event.attendees}/{event.maxAttendees} attending</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                    {event.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{event.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Organizer */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">by {event.organizer}</span>
                    <div className="w-full bg-gray-200 rounded-full h-1 ml-3">
                      <div 
                        className="bg-primary-500 h-1 rounded-full" 
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleJoinEvent(event.id)}
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 font-medium"
                  >
                    {event.attendees >= event.maxAttendees ? 'Join Waitlist' : 'Join Event'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-800 mb-2">No events found, guru!</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or create a new event for the community
            </p>
            <Link
              to="/events/create"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200"
            >
              <Plus size={20} />
              <span>Create New Event</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;