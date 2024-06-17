export default async function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl my-5">Publications</h1>
      <div className="my-5 text-center">
        <h2 className="text-2xl underline">Presentations (1)</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=cTi5Amaqf-Q">
              Quantum Vision Transformer
            </a>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cTi5Amaqf-Q?si=JEwSIAzhhqLkjWNf"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>
        </ul>
      </div>

      {/* <div className="my-5">
        <h2 className="text-2xl text-center underline">
          Literature Reviews (19)
        </h2>
        <ul>
          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://learning.oreilly.com/library/cover/9781491935668/250w/"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Kubernetes: Up and Running</h3>
              <h2>Brendan Burns, Joe Beda, and Kelsey Hightower</h2>
            </div>
            <div className="m-3">
              <p>
                I started reading this book primarily to get started with
                containers and Kubernetes. I've been having a decent
                understanding of containers and have worked with Docker before,
                but in this instance I needed to build a high performing system.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://covers.openlibrary.org/b/id/8390831-L.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">
                Quantum Computation and Quantum Information
              </h3>
              <h2>Michael A. Nielsen, Isaac L. Chuang</h2>
            </div>
            <div className="m-3">
              <p>
                This book provides a comprehensive introduction to the theory
                and practice of quantum computing and information. It has been
                crucial in expanding my understanding of quantum mechanics and
                its computational applications.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images.penguinrandomhouse.com/cover/9780199678112"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Superintelligence</h3>
              <h2>Nick Bostrom</h2>
            </div>
            <div className="m-3">
              <p>
                This book explores the future of artificial intelligence and its
                potential impact on society. It provides deep insights into the
                challenges and opportunities posed by superintelligent AI.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41oGs8GEEPL._SX329_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Deep Utopia</h3>
              <h2>Nick Bostrom</h2>
            </div>
            <div className="m-3">
              <p>
                In this thought-provoking book, Bostrom delves into the
                possibilities of achieving a utopian society through advances in
                technology and deep thinking about human values.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://covers.oreillystatic.com/images/9780131103627/lrg.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">The C Programming Language</h3>
              <h2>Brian W. Kernighan, Dennis M. Ritchie</h2>
            </div>
            <div className="m-3">
              <p>
                This classic book is essential for learning the fundamentals of
                C programming. It has been a valuable resource in mastering the
                language and understanding system-level programming.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41F9A0XERQL._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">
                The Hitchhiker's Guide to the Galaxy
              </h3>
              <h2>Douglas Adams</h2>
            </div>
            <div className="m-3">
              <p>
                A humorous and imaginative science fiction novel that takes
                readers on a whimsical journey through the galaxy. It's a
                delightful read that blends satire, wit, and adventure.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://covers.openlibrary.org/b/id/8379551-L.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Metamorphosis of Prime Intellect</h3>
              <h2>Roger Williams</h2>
            </div>
            <div className="m-3">
              <p>
                This novel explores the implications of a superintelligent AI
                that gains control over the universe. It raises fascinating
                questions about the nature of power and humanity's place in a
                technologically advanced world.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51aiK3W-k+L._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Critique of Pure Reason</h3>
              <h2>Immanuel Kant</h2>
            </div>
            <div className="m-3">
              <p>
                A foundational work in philosophy, this book provides an
                in-depth analysis of metaphysics and epistemology. It's a
                challenging but rewarding read that has greatly influenced my
                philosophical thinking.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51p3XQPKGEL._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Fundamentals of Astrodynamics</h3>
              <h2>Roger R. Bate, Donald D. Mueller, Jerry E. White</h2>
            </div>
            <div className="m-3">
              <p>
                This book provides a comprehensive introduction to the
                principles of astrodynamics and orbital mechanics. It's an
                essential resource for anyone interested in space exploration
                and satellite technology.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://covers.openlibrary.org/b/id/8232002-L.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">
                The History of the Decline and Fall of the Roman Empire
              </h3>
              <h2>Edward Gibbon</h2>
            </div>
            <div className="m-3">
              <p>
                A monumental work of history that chronicles the fall of the
                Roman Empire. Gibbon's analysis is detailed and insightful,
                offering valuable lessons on the rise and fall of civilizations.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51uN9ByplRL._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Aap in Pak</h3>
              <h2>Kader Abdolah</h2>
            </div>
            <div className="m-3">
              <p>
                A compelling novel that delves into the complexities of cultural
                identity and migration. Abdolah's storytelling is both poignant
                and thought-provoking.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51RYbL6K60L._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">The Art of War</h3>
              <h2>Sun Tzu</h2>
            </div>
            <div className="m-3">
              <p>
                An ancient Chinese military treatise that offers timeless
                strategies for success in warfare and beyond. Its principles are
                applicable to various aspects of life, including business and
                personal development.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51k0qa6QZIL._SX404_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Design Patterns</h3>
              <h2>Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides</h2>
            </div>
            <div className="m-3">
              <p>
                This book provides a comprehensive guide to software design
                patterns, offering solutions to common design problems. It's an
                essential resource for software developers looking to improve
                their design skills.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51V23uPbFNL._SX379_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">The Pragmatic Programmer</h3>
              <h2>Andrew Hunt, David Thomas</h2>
            </div>
            <div className="m-3">
              <p>
                A classic book that offers practical advice and tips for
                software developers. It covers a wide range of topics, from
                coding techniques to project management, making it a must-read
                for any programmer.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41LOq9BOi9L._SX348_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Algorithms</h3>
              <h2>Robert Sedgewick, Kevin Wayne</h2>
            </div>
            <div className="m-3">
              <p>
                This book provides a comprehensive introduction to algorithms
                and data structures. It's an essential resource for anyone
                looking to deepen their understanding of computer science
                fundamentals.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41IYx9VMCcL._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Negotiating for Success</h3>
              <h2>George J. Siedel</h2>
            </div>
            <div className="m-3">
              <p>
                This book offers practical strategies and techniques for
                effective negotiation. It's a valuable resource for anyone
                looking to improve their negotiation skills and achieve better
                outcomes.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41+8YpKNSqL._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Quantum Computing since Democritus</h3>
              <h2>Scott Aaronson</h2>
            </div>
            <div className="m-3">
              <p>
                This book provides an accessible introduction to the principles
                of quantum computing. Aaronson's writing is engaging and
                thought-provoking, making complex concepts easier to understand.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41XBlMiwPGL._SX331_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Good Strategy Bad Strategy</h3>
              <h2>Richard P. Rumelt</h2>
            </div>
            <div className="m-3">
              <p>
                This book explores the difference between good and bad
                strategies, providing practical advice for developing effective
                strategies. It's a must-read for anyone involved in strategic
                planning and decision-making.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41iMyMWsAmL._SX380_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Neuroscience: Exploring the Brain</h3>
              <h2>Mark F. Bear, Barry W. Connors, Michael A. Paradiso</h2>
            </div>
            <div className="m-3">
              <p>
                This textbook provides a comprehensive introduction to the field
                of neuroscience. It covers a wide range of topics, from cellular
                and molecular neuroscience to cognitive and behavioral
                neuroscience.
              </p>
            </div>
          </li>

          <li className="flex m-3">
            <div className="m-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41zLC3aJGaL._SX403_BO1,204,203,200_.jpg"
                alt=""
                width="500em"
              />
              <h3 className="font-bold">Deep Learning with Python</h3>
              <h2>François Chollet</h2>
            </div>
            <div className="m-3">
              <p>
                This book offers an accessible introduction to deep learning
                using Python and Keras. It's a valuable resource for anyone
                looking to get started with deep learning and understand its
                practical applications.
              </p>
            </div>
          </li>
        </ul>
      </div> */}

      {/* <h2>Blog posts (0)</h2> */}
    </div>
  );
}
